import Link from "next/link";

export default function NotFopund(){
    return (
        <div className="container">
            <h1 className="h2">Not Found</h1>
            <p className="para">could not find requested resource </p>
            <Link href="/"  className="link"> Return Home</Link>
        </div>
    )
}