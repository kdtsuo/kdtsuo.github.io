import React from 'react';
import '../output.css';
import dancepractice from '../imgs/dancepractice.png';
import events from '../imgs/events.jpeg';
import showcase from '../imgs/showcase.jpeg';
import Activity from './subcomponents/Activity';

const Activities = () => {
    const activities = [
        {
            image: dancepractice,
            title: 'Dance Workshops',
            text: 'We provide drop-in dance classes for the general public and extra dance practices for performance groups! Learn from experienced instructors in a fun, supportive environment.',
            reverse: false
        },
        {
            image: events,
            title: 'K-Pop Events',
            text: 'We host K-pop related events including random dance challenges, watch parties, karaokes, and other activities that promote K-pop and Korean culture!',
            reverse: true
        },
        {
            image: showcase,
            title: 'K-Fest Showcase',
            text: 'Annually, we host K-pop dance concerts to showcase our dance skills and creativity! Join us for an unforgettable experience celebrating K-pop performance.',
            reverse: false
        }
    ];

    return (
        <section className="bg-gradient-to-b from-darkslateblue to-darkslateblue/90 py-16 px-4 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16 relative">
                    <span className="relative">
                        Activities
                        <span className="absolute -bottom-3 left-0 w-full h-1 bg-lightblue-100 rounded-full"></span>
                    </span>
                </h1>

                <div className="space-y-16 lg:space-y-24">
                    {activities.map((activity, index) => (
                        <Activity
                            key={index}
                            image={activity.image}
                            title={activity.title}
                            text={activity.text}
                            reverse={activity.reverse}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;