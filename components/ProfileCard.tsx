
interface ProfileCardProps {
    title: string;
    description: string;
}

export default function ProfileCard({
    title,
    description
}: ProfileCardProps) {
    return (
        <article className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">

            <h3 className="text-lg font-bold text-slate-900 mb-3">
                {title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
                {description}
            </p>

        </article>
    );
}
