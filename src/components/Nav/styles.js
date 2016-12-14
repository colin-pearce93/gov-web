import { lightBorder, flexCenter, font } from '../../global/styles';

export const styles = {
  navContainer: Object.assign(lightBorder(["Bottom"]), flexCenter("row"), {
    backgroundColor: "rgba(0, 0, 0, .1)",
    minWidth: 1000
  }),
  navText: Object.assign(font, {
    textAlign: "center"
  })
}
