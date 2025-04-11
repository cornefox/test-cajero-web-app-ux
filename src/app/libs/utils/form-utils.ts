import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
  public static getTextError(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;

        case 'maxlength':
          return `Máximo de ${errors['maxlength'].requiredLength} caracteres`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;

        default:
          return `Error de validación no controlado ${key}`;
      }
    }

    return null;
  }

  public static isValidField(
    form: FormGroup,
    fieldName: string,
  ): boolean | null {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  }

  public static getFieldError(
    form: FormGroup,
    fieldName: string,
  ): string | null {
    if (!form.controls[fieldName]) return null;

    const errors: any = form.controls[fieldName].errors ?? {};
    return FormUtils.getTextError(errors);
  }

  public static isValidFieldInArray(
    formArray: FormArray,
    index: number,
  ): boolean | null {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  public static getFieldErrorInArray(
    formArray: FormArray,
    index: number,
  ): string | null {
    if (formArray.controls.length === 0) return null;

    const errors: any = formArray.controls[index].errors ?? {};

    return FormUtils.getTextError(errors);
  }
}
