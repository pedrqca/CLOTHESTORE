const hoodieImages = import.meta.glob(
    '../assets/hoodies/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        query: '?url',
        import: 'default',
    }
);


export const getHoodieImage = (fileName: string) => {
    const path = `../assets/hoodies/${fileName}`;

    return hoodieImages[path] as string;
};