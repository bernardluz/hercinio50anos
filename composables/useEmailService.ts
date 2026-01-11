import emailjs from '@emailjs/browser'

// Configurações do serviço (Idealmente viriam de variáveis de ambiente em projetos reais, 
// mas hardcoded aqui para simplicidade do setup atual)
const EMAILJS_SERVICE_ID = 'service_xbfjvqy'
const EMAILJS_TEMPLATE_ID = 'template_99v0dmk'
const EMAILJS_PUBLIC_KEY = 'PG4ZrD1Cy5EOeqU2i'

interface RsvpData {
    name: string;
    message: string;
}

export const useEmailService = () => {
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
