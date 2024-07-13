import CEO from '../../assets/CEO-07.jpg'
import CEO1 from '../../assets/CEO-08.jpg'
import CEO2 from '../../assets/CEO-09.jpg'
import CEO3 from '../../assets/CEO-10.jpg'
import CEO4 from '../../assets/CEO-11.jpg'

const About = () => {
    return (
        <div className='lg:w-3/4 mx-auto p-4 mt-16'>
            <div className=''>
                <h1 className='text-center font-semibold text-5xl my-8'>
                    About Anchor Travels
                </h1>
                <h2 className='lg:w-3/4 text-xl mx-auto '>
                    <span className='font-semibold'>Anchor Travels</span> has been serving New York for 16 years. Anchor Travels is serving a total of 4 branches including Weight Park, Jamaica and Brooklyn. <br /> <br />

                    Anchor Travels primarily provides airline ticketing, home care and money transfer services.

                    We have been able to strengthen our position as a reliable institution for sending money to Bangladesh, India, Pakistan in New York.
                    Anchor Travels in New York is one of the service provider for airlines ticket services for travel to any country in the world including Bangladesh.
                </h2>
            </div>
            <div className='flex flex-col lg:flex-row mt-8'>
                <div className="flex flex-col lg:flex-row gap-4 lg:w-1/2 mx-auto py-8">
                    <div className=''>
                        <img className='rounded-lg' src={CEO} alt="" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img className='rounded-lg' src={CEO1} alt="" />
                        <img className='rounded-lg' src={CEO2} alt="" />
                        <img className='rounded-lg' src={CEO3} alt="" />
                        <img className='rounded-lg' src={CEO4} alt="" />
                    </div>


                </div>
                <div className='lg:w-1/2 lg:p-8'>
                    <h2 className='text-3xl font-bold'>ASM Maiyen Uddin (Pintu)</h2>
                    <h2 className='text-xl py-2'>President & CEO</h2>
                    <h2 className='mt-6 font-semibold text-2xl'>Message from the President</h2>
                    <p className='text-xl'>We are selling air tickets to a wide variety of people. Mostly community base customers are our strength. Bangladeshi, Indian, Pakistani, Nepali and other community clients buy tickets from us. Our 7 days’ <br /> <br /> service makes them easy to travel at anytime. The Success of Anchor Travels Began in Ozone Park, Queens through honesty, diligence and etiquette. It gained the trust and satisfaction of its customers since 2010. A key to a business and its success are its customer’s satisfaction and trust.</p>
                </div>
            </div>
            <div className='mt-8'>
                <h2 className='text-5xl bg-blue-500 bg-opacity-10 font-bold text-center py-8'>OUR GOAL</h2>
                <p className='my-4 text-xl mb-24'>
                Our goal is not only selling Air Ticket also assure that our customers got a lowest cost Air Ticket. Our best selling airline tickets are from Emirates, Etihad airways, Qatar airways, Turkish airlines, Kuwait airways, Saudia airlines, British airways, Biman Bangladesh Airlines, Air France and other our prominent airlines. Not only We arrange International Air Ticket but Also offer Domestic US all State guaranteed Low Cost Air Ticket with great service. In domestic routes our local partners are American Airlines, Delta Airlines, Jet Blue, United Airlines Also Air Canada.
                </p>
            </div>
        </div>
    )
}
export default About