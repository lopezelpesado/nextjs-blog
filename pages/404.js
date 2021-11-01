import Link from "next/link"

export default function Custom404() {
    return <h1>404! Where the hell do you think you're off to?! Get back to the{' '}
        <Link href="/">
            <a>home page</a>
        </Link>!</h1>
  }