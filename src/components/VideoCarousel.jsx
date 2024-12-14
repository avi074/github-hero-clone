import Card from "./UI/Card"

/**
 *
 * @param {Object} props.source
 * @returns
 */
function VideoCarousel({ source }) {
  return (
    <>
      <Card className='mt-8 w-full md:w-11/12 mx-auto rounded-xl relative max-sm:translate-x-8'>
        <Card className='w-full max-sm:p-0 p-2 pb-0 border-2 rounded-2xl bg-gradient-to-tl'>
          <Card className='p-2 pb-0 w-full'>
            <video
              muted
              playsInline
              src={source?.video}
              poster={source?.poster}
              className='rounded-xl w-full h-full bg-[#151a22] aspect-[357/390] md:aspect-[1206/684] object-cover md:object-fill object-left-bottom'></video>
          </Card>
        </Card>
      </Card>
    </>
  )
}

export default VideoCarousel
