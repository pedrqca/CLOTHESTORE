const jacketsImages = import.meta.glob(
    '../assets/jackets/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        query: '?url',
        import: 'default',
    }
);



export const getJacketImage = (fileName: string) => {
    const path = `../assets/jackets/${fileName}`;

    return jacketsImages[path] as string;
};