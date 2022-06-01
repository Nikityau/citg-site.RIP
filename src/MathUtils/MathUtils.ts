export class MathUtils {
  static RotateAngle(elX: number, elY: number, oX: number, oY: number): number {
    const c = Math.sqrt(Math.pow(elX - oX, 2) + Math.pow(elY - oY, 2));

    const additionalPoint = {
      x: elX,
      y: oY,
    };

    const b = Math.sqrt(Math.pow(additionalPoint.x - oX, 2));

    const cosAlpha = b / c;
    const angleRad = Math.acos(cosAlpha);
    const angle = (angleRad * 180) / Math.PI;

    return angle;
  }

  static RadianCircle(angle: number): number {
    return (2 * Math.PI * angle) / 360;
  }
  static PointsCoordsOnCircle(
    angle: number,
    r: number = 1,
    cx: number = 0,
    cy: number = 0
  ): { x: number; y: number } {
    const x = -Math.cos(MathUtils.RadianCircle(angle)) * r + cx;
    const y = -Math.sin(MathUtils.RadianCircle(angle)) * r + cy;

    return {
      x,
      y,
    };
  }
}
