import LoadingIndicator from "./LoadingIndicator"
import SkeletonLoader from "./SkeletonLoader"
import { useReadContract } from "wagmi"
import { abi } from "../../backend/ignition/deployments/chain-11155111/artifacts/GigaCreditIssuerModule#GigaCreditIssuer.json"
import deployed_addresses from "../../backend/ignition/deployments/chain-11155111/deployed_addresses.json"
import { formatEther } from "viem"

export default function CreditIssuerBalance({school}: any) {
    console.log('CreditIssuerBalance, school:', school)

    const deploymentAddress = deployed_addresses["GigaCreditIssuerModule#GigaCreditIssuer"]
    console.log('deploymentAddress:', deploymentAddress)

    let schoolId: string = school.giga_id_school
    schoolId = schoolId.replaceAll('-', '')
    console.log('schoolId:', schoolId)

    const { isLoading, isError, data } = useReadContract({
        abi,
        address: deploymentAddress as `0x${string}`,
        functionName: 'balance',
        args: [schoolId]
    })
    console.log('isLoading:', isLoading)
    console.log('isError:', isError)
    console.log('data:', data)

    if (isLoading) {
        return (
            <div className="flex flex-col">
                <h2 className="text-3xl">Credit balance: <LoadingIndicator /></h2>
                <div className="mt-4">
                    <SkeletonLoader />
                </div>
            </div>
        )
    }

    if (isError) {
        return <div>Error</div>
    }

    console.log('data:', data)
    const balance: bigint = BigInt(Number(data))
    console.log('balance:', balance)
    const balanceFormatted = formatEther(balance)
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl">Credit balance: <b>{balanceFormatted} $GC</b></h2>
            <div className="mt-4">
                <SkeletonLoader />
            </div>
        </div>
    )
}
