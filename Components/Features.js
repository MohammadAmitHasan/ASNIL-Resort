import TwoLayer from "./TwoLayer";

const Features = () => {

    const features = [
        'Water Sports',
        'Cycling',
        'Kids fun activities',
        'Boating',
        'Canoeing & Kayaking',
        'Outdoor sports',
        '9D Movies',
        'VR Games'
    ]

    const titleText = 'Special Features We Provide'

    return <div className="mt-20 container mx-auto px-5">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-10 text-slate-800">What makes Us different?</h1>
        <TwoLayer imgSrc={'/images/Banner/pool-hotel-resort.png'} features={features} titleText={titleText} />
    </div>;
};
export default Features;