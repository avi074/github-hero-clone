import Button from "./UI/Button"
import Card from "./UI/Card"

function Header() {
  return (
    <Card className='flex-col gap-4 text-white'>
      <Card className='flex-col p-2'>
        <h1 className='text-3xl md:text-5xl tracking-tight p-3 text-balance text-center my-4 font-bold'>
          Build and ship software on a single, collaborative platform
        </h1>
        <p className='text-balance text-center lg:text-2xl font-medium'>
          Join the world’s most widely adopted AI-powered developer platform.
        </p>
      </Card>
      <Card className='!items-stretch max-sm:w-10/12 gap-2 flex-col my-4 lg:flex-row'>
        <form className='flex flex-col md:flex-row md:justify-center items-stretch relative rounded-md bg-white text-gray-800'>
          <Card className='flex-col-reverse !items-stretch rounded-md p-4 md:py-0 m-0.5 relative z-0 focus-within:border border-blue-600'>
            <input
              type='email'
              name='email'
              id='uemail'
              placeholder='you@company.com'
              className='bg-transparent appearance-none block pt-3 outline-none peer placeholder:opacity-0 focus-within:placeholder:opacity-100'
            />
            <label
              htmlFor='uemail'
              className='start-4 font-semibold w-full absolute transition ease-linear duration-300 origin-top-left peer-focus:scale-90 peer-focus:-translate-y-3 peer-[&:not(:placeholder-shown):focus]:transition-none peer-[&:not(:placeholder-shown):focus]:translate-y-0 peer-[&:not(:placeholder-shown)]:scale-90 peer-[&:not(:placeholder-shown)]:top-0'>
              Enter your email
            </label>
          </Card>
          <Button type='reset' color='#1a7f37' className='h-12'>
            Sign up for GitHub
          </Button>
        </form>
        <Button
          color='rgba(0,0,0, 0.5)'
          className='outline-offset-2 ring-2 ring-white !hover:bg-opacity-75 '>
          Try GitHub Copilot
        </Button>
      </Card>
    </Card>
  )
}

export default Header
