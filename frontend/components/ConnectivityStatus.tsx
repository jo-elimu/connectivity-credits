import deployed_addresses from "../../backend/ignition/deployments/chain-11155111/deployed_addresses.json"

export default function ConnectivityStatus() {
    const randomNumber = Math.round(Math.random() * 3)
    console.log('randomNumber:', randomNumber)
    if (randomNumber == 0) {
        return (
            <span className="border-2 border-green-600 rounded-xl bg-green-900 text-green-400 px-2 py-1 inline-flex">
                <span className="relative top-1.5 mr-1.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span> Connected
            </span>
        )
    } else if (randomNumber == 1) {
        const deploymentAddress = deployed_addresses["GigaCreditIssuerModule#GigaCreditIssuer"]
        console.log('deploymentAddress:', deploymentAddress)
        return (
            <>
            <span className="border-2 border-red-600 rounded-xl bg-red-900 text-red-400 px-2 py-1 inline-flex">
                Not connected
            </span> <a className="rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] px-4 py-2"
                target="_blank"
                href={`https://sepolia.etherscan.io/address/${deploymentAddress}#writeContract#F1`}>
                    Issue Connectivity Credits
            </a>
            </>
        )
    } else {
        return (
            <span className="border-2 border-sky-600 rounded-xl bg-sky-900 text-sky-400 px-2 py-1 inline-flex">
                Unknown
            </span>
        )
    }
}
