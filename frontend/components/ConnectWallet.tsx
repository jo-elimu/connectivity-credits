import { useAccount } from 'wagmi'
import { WalletOptions } from './WalletOptions'
import { Account } from './Account'

export function ConnectWallet() {
    const { isConnected } = useAccount()
    console.log('isConnected:', isConnected)
    if (isConnected) {
        return <Account />
    } else {
        return <WalletOptions />
    }
}
