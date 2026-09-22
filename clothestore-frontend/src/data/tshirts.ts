const tshirtImages = import.meta.glob(
    '../assets/tshirts/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        query: '?url',
        import: 'default',
    }
);

export const getTshirtImage = (fileName: string) => {
    const path = `../assets/tshirts/${fileName}`;

    return tshirtImages[path] as string;
};