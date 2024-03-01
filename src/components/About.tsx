
interface AboutProps {
    mode: string
}

export default function About(props: AboutProps) {
    return (
        <div className='container' style={{ color: (props.mode === 'light') ? '#042743' : 'white' }}>
            <h1 className='my-3'>About Us</h1>
            <p>"About" pages are essential components of websites, serving as a window into the ethos and purpose behind an entity. They provide visitors with insight into the organization's mission, values, and history. Through concise yet compelling narratives, about pages establish a connection with audiences, fostering trust and credibility. From businesses showcasing their unique offerings to individuals sharing their passions, these pages offer a glimpse into the driving forces behind a brand or individual. Whether it's highlighting achievements, sharing personal anecdotes, or outlining future goals, about pages play a pivotal role in shaping the perception of a website and its creators.</p>
        </div>
    )
}
