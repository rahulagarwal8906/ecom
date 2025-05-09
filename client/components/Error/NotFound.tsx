import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <Image
          src="/assets/not-found.webp"
          alt="Not Found"
          width={300}
          height={300}
          className="mx-auto"
        />
        <h1 className="text-6xl font-bold text-gray-800 mt-6">404</h1>
        <p className="text-lg text-gray-600 mt-2">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
