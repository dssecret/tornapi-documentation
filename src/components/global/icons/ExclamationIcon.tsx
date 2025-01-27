import { DefaultIcon } from "@/components/global/icons/icon.types";

export default function ExclamationIcon(props: DefaultIcon) {
    const width = "size" in props ? props.size : props.width;
    const height = "size" in props ? props.size : props.height;
    const fillColor = props.fill ?? "currentColor";

    return (
        <svg viewBox="0 0 14 14" width={width} height={height} stroke={fillColor} fill={fillColor} strokeWidth={0.5}>
            <path d="m 7.0157956,12 c -0.56859,0 -1.02951,-0.46096 -1.02951,-1.02955 0,-0.56851 0.46092,-1.02942 1.02951,-1.02942 0.56851,0 1.02942,0.46091 1.02942,1.02942 0,0.56859 -0.46091,1.02955 -1.02942,1.02955 z m 1.36029,-8.42977 c -0.0871,0.69397 -0.72628,4.07248 -0.93761,5.18268 -0.039,0.20528 -0.21847,0.3543 -0.42749,0.3543 l -0.008,0 c -0.21643,0 -0.40133,-0.15365 -0.44166,-0.36619 -0.21402,-1.12696 -0.85224,-4.5084 -0.93793,-5.19134 C 5.5202056,2.72725 6.1620856,2 6.9907656,2 c 0.83983,5e-5 1.49023,0.73702 1.3857,1.57023 z" />
        </svg>
    );
}
