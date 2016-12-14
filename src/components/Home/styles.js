import { lightBorder, flexCenter, font } from '../../global/styles';

export const styles = {
  homeContainer: Object.assign(flexCenter("column"), lightBorder("all"), {
    backgroundColor: "rgba(0, 0, 0, .3)"
  }),
  homeText: Object.assign(font, {
    textAlign: "center"
  })
}
