const accessoryImages = import.meta.glob(
    '../assets/accessories/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        query: '?url',
        import: 'default',
    }
);



export const getAccessoryImage = (fileName: string) => {
    const path = `../assets/accessories/${fileName}`;

    return accessoryImages[path] as string;
};