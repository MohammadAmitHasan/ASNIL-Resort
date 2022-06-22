import HomeLayout from "Layouts/HomeLayout";
import { signOut, useSession, getSession } from "next-auth/react"
import { useEffect } from "react";

const Restricted = ({ data }) => {

    return <>
        <HomeLayout>
            <h1>{data}</h1>
        </HomeLayout>
    </>


};
export default Restricted;

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/restricted',
                permanent: false
            }
        }
    }
    return {
        props: {
            data: 'Only authorized',
            session
        }
    }
}