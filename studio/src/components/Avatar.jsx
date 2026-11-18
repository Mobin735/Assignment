import { brand } from "../brand";
import { photoOrFirst } from "../data/photos";
import Photo from "./Photo";

export default function Avatar({ size = "lg" }) {
  const photo = photoOrFirst(brand.avatarPhotoId);

  return (
    <span className={`avatar avatar-${size}`}>
      <Photo photo={photo} decorative priority={size === "lg"} />
    </span>
  );
}
