import Link from 'next/link'

export default function Header() {
  return (
    <div className="bg-sky-500 shadow-md p-4 ">
      <Link href={'/'}>
        <h1 className="text-white font-bold tracking-widest">Sharelink</h1>
      </Link>
    </div>
  )
}
