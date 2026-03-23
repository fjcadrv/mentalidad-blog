// Componente para embeber videos de YouTube en posts MDX
// Uso en el post: <YoutubeEmbed id="dQw4w9WgXcQ" />

export default function YoutubeEmbed({ id, title = 'Video de YouTube' }) {
  if (!id) return null;

  return (
    <div className="w-full my-6 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
