import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
                <h3 className="text-color-accent text-2xl font-bold">PAGE NOT FOUND</h3>
                <Link href="/" className="text-color-primary hover:text-color-accent transition-all underline">Back to Home</Link>
            </div>
        </div>
    )
}

export default Page