<script setup lang="ts">
import { CheckCircle2, Send } from 'lucide-vue-next'
import { localeText, type LocaleText } from '~/data/site'

type FormField = {
  key: string
  label: LocaleText
  type: 'text' | 'email' | 'tel' | 'date' | 'textarea' | 'number'
  required: boolean
  autocomplete?: string
}

const props = defineProps<{ formKind?: string }>()
const { locale, t } = useI18n()

const form = reactive<Record<string, string>>({})
const submitted = ref(false)
const submitting = ref(false)
const attempted = ref(false)
const submitError = ref('')
const businessMode = ref<'inquiry' | 'visit'>('inquiry')
const isBusinessForm = computed(() => props.formKind === 'business')
const isVisitMode = computed(() => props.formKind === 'visit' || (isBusinessForm.value && businessMode.value === 'visit'))

const businessModes = [
  { id: 'inquiry' as const, label: { zh: '业务咨询', en: 'Business Inquiry' } },
  { id: 'visit' as const, label: { zh: '来访预约', en: 'Visit Booking' } }
]

const formFields = computed<FormField[]>(() => {
  const base: FormField[] = [
    { key: 'name', label: { zh: '姓名', en: 'Name' }, type: 'text', required: true, autocomplete: 'name' },
    { key: 'company', label: { zh: '公司', en: 'Company' }, type: 'text', required: !isVisitMode.value, autocomplete: 'organization' },
    { key: 'email', label: { zh: '邮箱', en: 'Email' }, type: 'email', required: !isVisitMode.value, autocomplete: 'email' }
  ]
  if (props.formKind === 'product') {
    return [
      ...base,
      { key: 'product', label: { zh: '产品意向', en: 'Product Direction' }, type: 'text', required: true },
      { key: 'quantity', label: { zh: '预计数量', en: 'Expected Quantity' }, type: 'text', required: false },
      { key: 'message', label: { zh: '需求描述', en: 'Requirement Details' }, type: 'textarea', required: true }
    ]
  }
  if (isVisitMode.value) {
    return [
      { key: 'name', label: { zh: '姓名', en: 'Name' }, type: 'text', required: true, autocomplete: 'name' },
      { key: 'phone', label: { zh: '联系方式', en: 'Contact' }, type: 'tel', required: true, autocomplete: 'tel' },
      { key: 'date', label: { zh: '预计到访日期', en: 'Preferred Date' }, type: 'date', required: true },
      { key: 'visitors', label: { zh: '到访人数', en: 'Visitor Count' }, type: 'number', required: true, autocomplete: 'off' },
      { key: 'message', label: { zh: '到访事由', en: 'Visit Purpose' }, type: 'textarea', required: true }
    ]
  }
  return [
    ...base,
    { key: 'role', label: { zh: '职位', en: 'Role' }, type: 'text', required: false },
    { key: 'message', label: { zh: '咨询内容', en: 'Inquiry Details' }, type: 'textarea', required: true }
  ]
})

const errors = computed(() => {
  const result: Record<string, string> = {}
  for (const field of formFields.value) {
    if (field.required && !String(form[field.key] ?? '').trim()) result[field.key] = t('form.required')
    if (field.key === 'visitors' && Number(form[field.key]) < 1) result[field.key] = t('form.required')
    if (field.type === 'email' && form[field.key] && !/^\S+@\S+\.\S+$/.test(form[field.key])) result[field.key] = t('form.invalidEmail')
  }
  return result
})
const hasErrors = computed(() => Object.values(errors.value).some(Boolean))
const submitLabel = computed(() => {
  if (submitting.value) return locale.value === 'en' ? 'Sending...' : '提交中...'
  if (!isBusinessForm.value) return t('cta.inquiry')
  return isVisitMode.value ? (locale.value === 'en' ? 'Submit Booking' : '提交预约') : (locale.value === 'en' ? 'Submit Inquiry' : '提交咨询')
})
const successMessage = computed(() => isVisitMode.value
  ? (locale.value === 'en' ? 'Your booking has been recorded. We will confirm the visit arrangement with you.' : '预约信息已记录，我们会与您确认后续来访安排。')
  : t('form.success'))

function text(value: LocaleText) {
  return localeText(value, locale.value)
}

function setBusinessMode(mode: 'inquiry' | 'visit') {
  businessMode.value = mode
  attempted.value = false
  submitted.value = false
  submitError.value = ''
}

async function submit() {
  attempted.value = true
  submitted.value = false
  submitError.value = ''
  if (hasErrors.value) return
  submitting.value = true
  try {
    // TODO: Replace with real API endpoint
    await new Promise((resolve) => setTimeout(resolve, 300))
    submitted.value = true
  } catch {
    submitError.value = locale.value === 'en' ? 'Submission failed, please try again.' : '提交失败，请稍后重试。'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <form class="inquiry-form" novalidate @submit.prevent="submit">
    <div v-if="isBusinessForm" class="form-mode" role="group" :aria-label="locale === 'en' ? 'Contact type' : '联系类型'">
      <button
        v-for="mode in businessModes"
        :key="mode.id"
        type="button"
        :class="{ active: businessMode === mode.id }"
        :aria-pressed="businessMode === mode.id"
        @click="setBusinessMode(mode.id)"
      >
        {{ text(mode.label) }}
      </button>
    </div>
    <p v-if="submitted" class="form-success" role="status"><CheckCircle2 :size="18" />{{ successMessage }}</p>
    <p v-if="submitError" class="field-error" style="margin-bottom:16px">{{ submitError }}</p>
    <div class="field-grid">
      <div v-for="field in formFields" :key="field.key" class="field" :class="{ 'field-wide': field.type === 'textarea' }">
        <label :for="field.key">{{ text(field.label) }}<span v-if="field.required"> *</span></label>
        <textarea v-if="field.type === 'textarea'" :id="field.key" v-model="form[field.key]" :aria-invalid="attempted && !!errors[field.key]" />
        <input v-else :id="field.key" v-model="form[field.key]" :type="field.type" :min="field.type === 'number' ? 1 : undefined" :autocomplete="field.autocomplete" :aria-invalid="attempted && !!errors[field.key]" />
        <span v-if="attempted && errors[field.key]" class="field-error">{{ errors[field.key] }}</span>
      </div>
    </div>
    <button class="button" type="submit" :disabled="submitting">
      {{ submitLabel }} <Send :size="17" />
    </button>
  </form>
</template>

<style scoped>
.inquiry-form { max-width: 840px; padding: 30px; border: 1px solid var(--line); border-radius: 0; background: var(--white); box-shadow: var(--shadow); }
.form-mode { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 0 0 26px; border: 1px solid var(--primary); }
.form-mode button { min-height: 46px; border: 0; border-right: 1px solid var(--primary); background: var(--white); color: var(--primary); font-size: 14px; font-weight: 800; transition: background 0.2s ease, color 0.2s ease; }
.form-mode button:last-child { border-right: 0; }
.form-mode button:hover { background: var(--primary-pale); }
.form-mode button.active { background: var(--primary); color: var(--white); }
.form-mode button:focus-visible { position: relative; z-index: 1; outline: 3px solid rgba(252,171,3,0.9); outline-offset: -3px; }
.field-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.field { display: grid; gap: 7px; margin-bottom: 4px; }
.field-wide { grid-column: 1 / -1; }
.field label { font-size: 14px; font-weight: 800; }
.field input, .field textarea { width: 100%; min-height: 46px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 0; background: var(--white); color: var(--ink); transition: border-color 0.2s ease, box-shadow 0.2s ease; }
.field input:focus, .field textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(252,171,3,0.16); outline: none; }
.field textarea { min-height: 132px; resize: vertical; }
.field-error { color: #b42318; font-size: 13px; }
.form-success { display: flex; align-items: center; gap: 8px; margin: 0 0 18px; padding: 12px 14px; border-radius: 0; background: #e7f5ef; color: #0f633c; font-weight: 760; }
.inquiry-form .button { margin-top: 20px; }

@media (max-width: 820px) {
  .field-grid { grid-template-columns: 1fr; }
}

@media (max-width: 520px) {
  .inquiry-form { padding: 22px; }
  .form-mode { margin-bottom: 22px; }
}
</style>
