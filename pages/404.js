import Image from "next/image";

const PageNotFound = () => {
    return <div className="min-h-screen flex justify-center items-center">
        <div>
            <Image width={300} height={200} src={'/images/404.webp'} alt='page not found'></Image>
            <h1 className="text-red-600 text-2xl font-semibold text-center">Sorry.! Page Not Found</h1>
        </div>
    </div>;
};
export default PageNotFound;