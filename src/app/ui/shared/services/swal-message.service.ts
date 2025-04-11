import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalMessageService {
  public TYPE_WARNING: SweetAlertIcon = 'warning';
  public TYPE_ERROR: SweetAlertIcon = 'error';
  public TYPE_SUCCESSFUL: SweetAlertIcon = 'success';
  public TYPE_INFO: SweetAlertIcon = 'info';
  public TYPE_QUESTION: SweetAlertIcon = 'question';

  public TEXT_BTN_ACCEPT = 'Aceptar';
  public TEXT_BTN_CANCEL = 'Cancelar';
  public TEXT_BTN_REJECT = 'Rechazar';

  public POSITION_SWAL_TOP: SweetAlertPosition = 'top';
  public POSITION_SWAL_TOP_START: SweetAlertPosition = 'top-start';
  public POSITION_SWAL_TOP_END: SweetAlertPosition = 'top-end';
  public POSITION_SWAL_CENTER: SweetAlertPosition = 'center';
  public POSITION_SWAL_CENTER_START: SweetAlertPosition = 'center-start';
  public POSITION_SWAL_CENTER_END: SweetAlertPosition = 'center-end';
  public POSITION_SWAL_BOTTOM: SweetAlertPosition = 'bottom';
  public POSITION_SWAL_BOTTOM_START: SweetAlertPosition = 'bottom-start';
  public POSITION_SWAL_BOTTOM_END: SweetAlertPosition = 'bottom-end';

  public COLOR_BTN_CONFIRM = '#FFA621';

  public alert(title: string, message: string) {
    Swal.fire({
      title: title,
      icon: this.TYPE_WARNING,
      html: message,
      confirmButtonColor: this.COLOR_BTN_CONFIRM,
    });
  }
  public info(title: string, message: string) {
    Swal.fire({
      title: title,
      icon: this.TYPE_INFO,
      html: message,
      confirmButtonColor: this.COLOR_BTN_CONFIRM,
    });
  }
  public question(title: string, message: string) {
    Swal.fire({
      title: title,
      icon: this.TYPE_QUESTION,
      html: message,
      confirmButtonColor: this.COLOR_BTN_CONFIRM,
    });
  }
  public successful(title: string, message: string) {
    Swal.fire({
      title: title,
      icon: this.TYPE_SUCCESSFUL,
      html: message,
      confirmButtonColor: this.COLOR_BTN_CONFIRM,
    });
  }
  public error(title: string, message: string) {
    Swal.fire({
      title: title,
      icon: this.TYPE_ERROR,
      html: message,
      confirmButtonColor: this.COLOR_BTN_CONFIRM,
    });
  }
  public async confirm(
    title: string,
    message: string,
    AcceptFunction: () => void,
    confirmButtonColor?: string,
    cancelButtonColor?: string,
    posicion?: SweetAlertPosition,
  ) {
    try {
      const result = await Swal.fire({
        title: title,
        icon: this.TYPE_INFO,
        html: message,
        position: posicion ? posicion : this.POSITION_SWAL_CENTER,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: this.TEXT_BTN_ACCEPT,
        confirmButtonColor: confirmButtonColor
          ? confirmButtonColor
          : this.COLOR_BTN_CONFIRM,
        cancelButtonText: this.TEXT_BTN_CANCEL,
        cancelButtonColor: cancelButtonColor ? cancelButtonColor : '#ed5565',
      });
      if (result.isConfirmed) {
        AcceptFunction();
      } else if (result.isDismissed) {
        console.log('Cancelado');
      }
    } catch (error) {
      console.log('error Swal confirmar: ', error);
    }
  }
  public async confirmOrReject(
    title: string,
    message: string,
    AcceptFunction: () => void,
    funcionRechazar: () => void,
    colorBotonDenegar?: string,
    confirmButtonColor?: string,
    posicion?: SweetAlertPosition,
  ) {
    try {
      const result = await Swal.fire({
        title: title,
        icon: this.TYPE_INFO,
        html: message,
        position: posicion ? posicion : this.POSITION_SWAL_CENTER,
        showCloseButton: true,
        showDenyButton: true,
        confirmButtonText: this.TEXT_BTN_ACCEPT,
        confirmButtonColor: confirmButtonColor
          ? confirmButtonColor
          : this.COLOR_BTN_CONFIRM,
        denyButtonText: this.TEXT_BTN_REJECT,
        denyButtonColor: colorBotonDenegar ? colorBotonDenegar : '#ed5565',
      });
      if (result.isConfirmed) {
        AcceptFunction();
      } else if (result.isDenied) {
        funcionRechazar();
      }
    } catch (error) {
      console.log('error Swal confirmarOrRechazar: ', error);
    }
  }
  public notify(
    title: string,
    posicion?: SweetAlertPosition,
    duracion?: number,
    tipoNotificacion?: SweetAlertIcon,
  ) {
    const Toast = Swal.mixin({
      toast: true,
      position: posicion ? posicion : this.POSITION_SWAL_CENTER_END,
      showConfirmButton: false,
      timer: duracion ? duracion : 3000,
      timerProgressBar: false,
    });

    Toast.fire({
      icon: tipoNotificacion ? tipoNotificacion : this.TYPE_SUCCESSFUL,
      title: title,
    });
  }
}
