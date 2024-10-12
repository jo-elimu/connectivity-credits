import { useAccount, useDisconnect } from 'wagmi'

export function Account() {
    const { address } = useAccount()
    console.log('address:', address)
    const { disconnect } = useDisconnect();
    return (
        <button className='rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] px-8 py-2 float-right'
                onClick={() => disconnect()}
                suppressHydrationWarning>
            {address?.substring(0,6)}...{address?.substring(38,42)}
        </button>
    )
}
