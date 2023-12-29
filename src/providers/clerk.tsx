import { ClerkProvider } from '@clerk/nextjs'

export function ClerkProviderContext({ children }: { children: React.ReactNode }) {
    return <ClerkProvider>{children}</ClerkProvider>
}