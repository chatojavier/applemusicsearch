import BgLogo from "../BgLogo";

const Home = () => {
    return (
        <div className='h-full flex flex-col md:flex-row'>
            <main className='main-content m-4 relative flex-grow'>
                <BgLogo></BgLogo>
            </main>
        </div>
    )
}

export default Home;