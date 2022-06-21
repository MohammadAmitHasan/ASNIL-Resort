import HomeLayout from "Layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import useSWR from 'swr'
import { getPosts } from "store/loadPost";
import { useEffect } from "react";

const Thunk = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state?.allPosts?.posts)

    // const fetcher = () => {
    //     dispatch(getPosts())
    // }

    // const { data, error } = useSWR('dispatch', fetcher)

    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return <>
        <HomeLayout>
            <div className="mt-10 container mx-auto p-5">
                <h1 className="text-2xl">I have loaded the data using redux async thunk</h1>
                <h1 className="text-xl">
                    {
                        posts.length
                    }
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        posts.map(post => <div key={post.id}>
                            <div className="p-5 shadow-lg rounded">
                                <h2 className="text-xl">{post.title}</h2>
                                <p>
                                    {post.body}
                                </p>
                            </div>
                        </div>)
                    }


                </div>
            </div>
        </HomeLayout>
    </>;
};
export default Thunk;