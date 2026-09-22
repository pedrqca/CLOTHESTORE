const pantsImages = import.meta.glob(
    '../assets/pants/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        query: '?url',
        import: 'default',
    }
);



export const getPantsImage = (fileName: string) => {
    const path = `../assets/pants/${fileName}`;

    return pantsImages[path] as string;
};