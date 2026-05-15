import Divider from "../../../components/Divider";
import Tag from "../../../components/Tag";
import FeatureContainer from "../../featureContainer/components/FeatureContainer";

export function Compositions() {
  return (
    <>
      <FeatureContainer title="Composition Route!">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error quidem temporibus doloribus aperiam inventore voluptates velit architecto alias at voluptatibus consectetur id est voluptas, accusantium, qui recusandae sed tenetur.</p>
      </FeatureContainer>

      <Divider />

      <Tag title="React"/>
      <Tag title="Vite"/>
      <Tag title="Tanstack"/>
    </>
  )
}
