import emailjs from '@emailjs/browser'


interface RsvpData {
    name: string;
    message: string;
}

export const useEmailService = () => {
    // Configurações via Runtime Config (Variáveis de Ambiente)
    const config = useRuntimeConfig()
    const EMAILJS_SERVICE_ID = config.public.emailjsServiceId as string
    const EMAILJS_TEMPLATE_ID = config.public.emailjsTemplateId as string
    const EMAILJS_PUBLIC_KEY = config.public.emailjsPublicKey as string

    const isSending = ref(false)
    const error = ref<string | null>(null)

    const sendRsvpEmail = async (data: RsvpData): Promise<boolean> => {
        isSending.value = true
        error.value = null

        try {
            const templateParams = {
                from_name: data.name,
                message: data.message,
                to_name: "Hercínio"
            }

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            )

            return true
        } catch (err: any) {
            console.error('EmailService Error:', err)
            error.value = 'Ocorreu um erro ao enviar a confirmação. Tente novamente.'
            return false
        } finally {
            isSending.value = false
        }
    }

    return {
        isSending,
        error,
        sendRsvpEmail
    }
}
