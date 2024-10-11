import { useConnect } from 'wagmi'

export function WalletOptions() {
    const { connectors, connect } = useConnect()
    return (
        <button className='rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] px-8 py-2 float-right'
                onClick={() => connect({ connector: connectors[0] })}>
            Connect Wallet
        </button>
    )
}
