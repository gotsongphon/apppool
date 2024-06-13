// ฟังก์ชันสำหรับส่งข้อมูลไปยัง Google Sheet
function submitForm() {
  // รับข้อมูลจากแบบฟอร์ม
  let leaveType = document.querySelector('select[name="leave_type"]').value;
  let leaveBoss = document.querySelector('input[name="leave_boss"]').value;
  let empName = document.querySelector('input[name="emp_name"]').value;
  let empPosition = document.querySelector('input[name="emp_position"]').value;
  let leaveReason = document.querySelector('textarea[name="leave_reason"]').value;
  let leaveDayTotal = document.querySelector('input[name="leave_day_total"]').value;
  let leaveDayBegin = document.querySelector('input[name="leave_day_begin"]').value;
  let leaveDayEnd = document.querySelector('input[name="leave_day_end"]').value;
  let empAddress = document.querySelector('textarea[name="emp_address"]').value;

  // ส่งข้อมูลไปยัง Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbwEyIPYPecqwGVlkJfG1Cyup_xH4hpifLBw6faQ2VoSGmazN2qZxwj4L_epm-j66857sw/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        leaveType: leaveType,
        leaveBoss: leaveBoss,
        empName: empName,
        empPosition: empPosition,
        leaveReason: leaveReason,
        leaveDayTotal: leaveDayTotal,
        leaveDayBegin: leaveDayBegin,
        leaveDayEnd: leaveDayEnd,
        empAddress: empAddress
      })
    })
  .then(response => {
    // ตรวจสอบว่าการส่งข้อมูลสำเร็จหรือไม่
    if (response.ok) {
      alert('บันทึกข้อมูลสำเร็จ');
      // ทำความสะอาดแบบฟอร์ม
      document.querySelector('form').reset();
    } else {
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
    }
  })
  .catch(error => {
    alert('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์');
  });
}

// ตั้งค่าการทำงานของปุ่ม "บันทึก"
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ
  submitForm();
});