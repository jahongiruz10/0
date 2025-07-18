let alarmTime = null;
let alarmTimeout = null;

function setAlarm() {
    const timeInput = document.getElementById("alarmTime").value;
    if (!timeInput) {
        alert("Iltimos, vaqtni tanlang!");
        return;
    }

    const [hours, minutes] = timeInput.split(":");
    const now = new Date();
    const alarmDate = new Date();

    alarmDate.setHours(parseInt(hours));
    alarmDate.setMinutes(parseInt(minutes));
    alarmDate.setSeconds(0);

    if (alarmDate <= now) {
        alarmDate.setDate(alarmDate.getDate() + 1); // ertangi kunga o‘tkazish
    }

    const timeToAlarm = alarmDate - now;

    clearTimeout(alarmTimeout);
    alarmTimeout = setTimeout(() => {
        document.getElementById("alarmSound").play();
        document.getElementById("status").textContent = "⏰ Budilnik chalindi!";
        alert("Budilnik vaqti keldi!");
    }, timeToAlarm);

    document.getElementById("status").textContent = "⏰ Budilnik o‘rnatildi: " + timeInput;
}