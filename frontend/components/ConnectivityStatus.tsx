export default function ConnectivityStatus() {
    return (
        <span className="border-2 border-sky-600 rounded-xl bg-sky-900 text-sky-400 px-2 py-1 inline-flex">
            <span className="relative top-1.5 mr-1.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span> Connected
        </span>
    )
}
