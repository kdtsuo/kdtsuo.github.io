import '../output.css';
import dancepractice from '../imgs/dancepractice.png';
import events from '../imgs/events.jpeg';
import showcase from '../imgs/showcase.jpeg';
import Activity from './subcomponents/Activity';

const Activities = () => {
    const activities = [];

    const addActivity = (image, title, text) => activities.push({ image, title, text });

    addActivity(dancepractice, 'dance workshops!', 'we provide drop-in dance classes for the general public and extra dance practices for performance groups!')
    addActivity(events, 'events!', 'we host kpop-related events ranging from random dance challenges, watch parties, karaokes and other events that promotes kpop and korean culture!')
    addActivity(showcase, 'k-fest showcase!', 'annually, we host kpop dance concerts to show off our dance skills and creativity!')

    return (
        <div className=' bg-darkslateblue drop-shadow-3xl px-5 py-10'>
            <div className='my-10'>

            </div>
            <h1 className='title text-center text-white'>Activities</h1>

            <div className='text-white'>
                {activities.map((activity, index) => {
                    return (<Activity
                        key={index}
                        image={activity.image}
                        title={activity.title}
                        text={activity.text} />)
                })}
            </div>

        </div>
    )
}

export default Activities;
