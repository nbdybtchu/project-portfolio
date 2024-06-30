import React, { useState, useEffect } from 'react';
import styles from './ProjectsStyles.module.css';
import image1 from '../../assets/img.jpg';
import image2 from '../../assets/img2.jpg';
import image3 from '../../assets/img3.jpg';
import image4 from '../../assets/img4.jpg';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: image1,
            author: 'Chu',
            title: 'Title 1',
            topic: 'Topic 1',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            src: image2,
            author: 'Chu',
            title: 'Title 2',
            topic: 'Topic 2',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            src: image3,
            author: 'Chu',
            title: 'Title 3',
            topic: 'Topic 3',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            src: image4,
            author: 'Chu',
            title: 'Title 4',
            topic: 'Topic 4',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.carousel}>
            <div className={styles.list}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.item} ${index === currentIndex ? styles.active : ''}`}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    >
                        <img src={image.src} alt={image.title} />
                        <div className={styles.content}>
                            <p className={styles.author}>{image.author}</p>
                            <h1 className={styles.title}>{image.title}</h1>
                            <h2 className={styles.topic}>{image.topic}</h2>
                            <p className={styles.description}>{image.description}</p>
                            <div className={styles.buttons}>
                                <button>Button 1</button>
                                <button>Button 2</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.thumbnail}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.item} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <img src={image.src} alt={image.title} />
                        <div className={styles.content}>
                            <p className={styles.title}>{image.title}</p>
                            <p className={styles.description}>{image.author}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.arrows}>
                <button onClick={prevSlide}>&#8249;</button>
                <button onClick={nextSlide}>&#8250;</button>
            </div>
        </div>
        </section>
    );
};

export default Slider;