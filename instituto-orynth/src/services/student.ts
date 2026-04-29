import { supabase } from "./supabase"

type DashboardData = {
  student: {
    username: string
    level: number
    peh: number
    pd: number
  }
  attrs: {
    for_value: number
    des_value: number
    int_value: number
    sab_value: number
    car_value: number
    von_value: number
  }
}

// ✅ Garante student + attributes
export async function ensureStudent(user: any) {
  if (!user?.id) return

  // =========================
  // STUDENT
  // =========================
  const { data: existingStudent } = await supabase
    .from("students")
    .select("id")
    .eq("id", user.id)
    .maybeSingle()

  if (!existingStudent) {
    await supabase.from("students").insert({
      id: user.id,
      username: user.email?.split("@")[0] ?? "Estudante",
      level: 1,
      peh: 100,
      pd: 50,
    })
  }

  // =========================
  // ATTRIBUTES
  // =========================
  const { data: existingAttrs } = await supabase
    .from("student_attributes")
    .select("student_id")
    .eq("student_id", user.id)
    .maybeSingle()

  if (!existingAttrs) {
    await supabase.from("student_attributes").insert({
      student_id: user.id,
      for_value: 5,
      des_value: 5,
      int_value: 5,
      sab_value: 5,
      car_value: 5,
      von_value: 5,
    })
  }
}

// ✅ Dashboard seguro (corrige o erro 406)
export async function getStudentDashboard(userId: string): Promise<DashboardData | null> {
  if (!userId) return null

  const { data: student } = await supabase
    .from("students")
    .select("username, level, peh, pd")
    .eq("id", userId)
    .maybeSingle()

  const { data: attrs } = await supabase
    .from("student_attributes")
    .select("for_value, des_value, int_value, sab_value, car_value, von_value")
    .eq("student_id", userId)
    .maybeSingle()

  // 🔥 evita crash (se ainda não existir)
  if (!student || !attrs) {
    console.warn("Dados incompletos")
    return null
  }

  return {
    student,
    attrs,
  }
}