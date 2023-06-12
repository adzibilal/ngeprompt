import Feed from '@components/Feed'
const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Temukan & Bagikan
                <br className='max-md:hidden' />
                <span className='blue_gradient text-center'>
                    Prompt AI yang Menakjubkan
                </span>
            </h1>
            {/* <p className="desc text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                dolorem quibusdam numquam modi error illum corrupti, accusamus
                consequuntur totam eius fugiat hic veritatis amet autem quis,
                repudiandae ipsam incidunt vel!
            </p>
             */}
            <Feed/>
        </section>
    )
}

export default Home
