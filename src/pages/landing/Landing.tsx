import Header from '../../components/header/Header'

const Home = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center gap-20 pt-40'>
        <h1 className='text-white text-5xl'>WELCOME TO THE PLANETS WEBSITE</h1>

        <h2 className='text-white text-5xl'>CLICK ON THE PLANET IN HEADER FOR INFORMATION!</h2>
      </div>
    </>
    
    )
}

export default Home