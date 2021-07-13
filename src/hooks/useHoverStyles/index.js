import useHover from "../useHover";

export default function useHoverStyles ({ nonHovered, hovered }) {
  const [ref, isHovered] = useHover();

  const replaceAttributesIfHovered = isHovered ? Object
    .assign(
      {},
      nonHovered,
      hovered
    )
    :
    nonHovered

  return [ref, replaceAttributesIfHovered];
}
