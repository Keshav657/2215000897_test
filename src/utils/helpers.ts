export const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const calculateCommentCount = (comments: Array<any>): number => {
    return comments.length;
};

export const getRandomImage = (): string => {
    const images = [
        'https://source.unsplash.com/random/300x200?sig=1',
        'https://source.unsplash.com/random/300x200?sig=2',
        'https://source.unsplash.com/random/300x200?sig=3',
        'https://source.unsplash.com/random/300x200?sig=4',
        'https://source.unsplash.com/random/300x200?sig=5',
    ];
    return images[Math.floor(Math.random() * images.length)];
};