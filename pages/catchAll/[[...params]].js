import { useRouter } from "next/router";
import HomeLayout from "Layouts/HomeLayout";

const CatchAll = () => {
    const router = useRouter()
    const { params = [] } = router.query

    return <>
        <HomeLayout>
            <div className="p-5 container mx-auto text-center">
                <h1 className="text-5xl font-semibold">This is catch all route.</h1>
                <h3 className="mt-10 mb-5 text-2xl font-semibold">The routes are</h3>
                <div className="text-left max-w-lg mx-auto p-10 shadow-2xl rounded-lg">
                    {
                        params.map((param, index) => <>
                            <p>{index + 1}. {param}</p>
                        </>)
                    }
                </div>
            </div>
        </HomeLayout>
    </>;
};
export default CatchAll;