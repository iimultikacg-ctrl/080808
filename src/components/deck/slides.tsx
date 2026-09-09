import { useState, type ComponentType, type ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Calendar,
  Dumbbell,
  Footprints,
  MapPin,
  Medal,
  Trophy,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Frame, Kicker, Mark, Panel, QrMark } from "./bits";

export type SlideMeta = {
  id: string;
  num: string;
  title: string;
  Component: ComponentType;
};

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-10 items-center justify-center rounded-md bg-accent-dim text-accent">
      {children}
    </span>
  );
}

export function CoverSlide() {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <img
        src="/images/court.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="veil-photo absolute inset-0" />
      <div className="relative flex h-full min-h-dvh flex-col justify-end px-5 pb-32 pt-20 sm:px-12 sm:pb-28 lg:px-16">
        <div className="stagger-in max-w-3xl">
          <Kicker>Коммуникационная концепция · 2026</Kicker>
          <h1 className="mt-4 font-display text-hero font-medium leading-none tracking-display text-fg sm:mt-5">
            Своя
            <br />
            сторона
            <br />
            силы
          </h1>
          <p className="mt-5 max-w-md text-base font-medium leading-snug text-fg sm:mt-6 sm:text-xl">
            От знания о возможностях — к регулярному участию
          </p>
          <div className="mt-6 hidden h-px w-16 bg-accent sm:block" />
          <p className="mt-6 hidden max-w-lg text-sm leading-relaxed text-muted sm:block sm:text-base">
            Коммуникационная стратегия вовлечения сотрудников Сбера
            в корпоративный спорт
          </p>
        </div>
      </div>
    </section>
  );
}

const ECOSYSTEM = [
  {
    icon: <Dumbbell className="size-5" strokeWidth={1.75} />,
    title: "Корпоративный спорт",
    text: "Регулярные активности и инфраструктура для сотрудников",
  },
  {
    icon: <Trophy className="size-5" strokeWidth={1.75} />,
    title: "Сбербанкиада",
    text: "Всероссийские соревнования — ключевой элемент культуры",
  },
  {
    icon: <Footprints className="size-5" strokeWidth={1.75} />,
    title: "Зелёный Марафон",
    text: "Массовый формат, объединяющий сотрудников и экосистему",
  },
  {
    icon: <Medal className="size-5" strokeWidth={1.75} />,
    title: "ГТО",
    text: "Программа стимулирования к сдаче нормативов",
  },
  {
    icon: <Building2 className="size-5" strokeWidth={1.75} />,
    title: "Инфраструктура",
    text: "В офисах есть пространства. В Новосибирске — зал с тренажёрами",
  },
  {
    icon: <Users className="size-5" strokeWidth={1.75} />,
    title: "Команды и секции",
    text: "В регионах — разные виды спорта. Набор зависит от офиса",
  },
];

export function EcosystemSlide() {
  return (
    <Frame>
      <div className="stagger-in grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <Kicker>01 · Экосистема</Kicker>
          <h2 className="mt-3 font-display text-display font-medium tracking-display text-fg">
            Что уже есть у Сбера
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
            Спортивная экосистема, которая уже работает. Коммуникация не создаёт
            спорт с нуля — она делает его видимым и достижимым.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
          {ECOSYSTEM.map((item) => (
            <Panel key={item.title} className="flex gap-4">
              <IconWrap>{item.icon}</IconWrap>
              <div>
                <h3 className="font-display text-sm font-medium tracking-tight text-fg">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </Frame>
  );
}

const FUNNEL = ["Узнал", "Заинтересовался", "Попробовал", "Втянулся", "Привёл"];

export function ProblemSlide() {
  return (
    <Frame>
      <div className="stagger-in">
        <Kicker>02 · Разрыв</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-display font-medium tracking-display text-fg">
          Возможностей много. Но человек должен понимать, что делать дальше.
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Panel className="bg-surface">
            <p className="font-display text-kicker uppercase tracking-widest text-subtle">
              Сегодня
            </p>
            <p className="mt-3 font-display text-xl font-medium tracking-tight text-fg sm:text-2xl">
              «Что у нас есть?»
            </p>
            <p className="mt-2 text-sm text-muted">Каталог возможностей без следующего шага</p>
          </Panel>
          <Panel className="bg-accent-dim">
            <p className="font-display text-kicker uppercase tracking-widest text-accent-soft">
              Нужно
            </p>
            <p className="mt-3 font-display text-xl font-medium tracking-tight text-fg sm:text-2xl">
              «Что я могу попробовать уже на этой неделе?»
            </p>
            <p className="mt-2 text-sm text-muted">Одно действие. Один формат. Одна запись.</p>
          </Panel>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {FUNNEL.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full bg-surface px-3 py-1.5 font-display text-xs font-medium tracking-wide text-fg sm:px-4 sm:text-sm">
                {step}
              </span>
              {i < FUNNEL.length - 1 ? (
                <ArrowRight className="size-3.5 text-subtle" strokeWidth={1.75} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

const BARRIERS = [
  {
    quote: "Я никогда этим не занимался",
    text: "Не хочу чувствовать себя новичком",
  },
  {
    quote: "Я не знаю, где это проходит",
    text: "Не понимаю, где искать расписание и как записаться",
  },
  {
    quote: "У меня нет времени",
    text: "Спорт кажется дополнительной нагрузкой",
  },
];

export function BarriersSlide() {
  return (
    <Frame>
      <div className="stagger-in">
        <Kicker>03 · Барьеры</Kicker>
        <h2 className="mt-3 font-display text-display font-medium tracking-display text-fg">
          Три причины не прийти
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted">
          Коммуникация закрывает не «осведомлённость о спорте», а эти три фразы.
        </p>
        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {BARRIERS.map((item, i) => (
            <Panel key={item.quote} className="flex min-h-48 flex-col justify-between">
              <p className="font-display text-kicker tabular-nums text-accent">
                0{i + 1}
              </p>
              <div>
                <p className="font-display text-xl font-medium leading-snug tracking-tight text-fg">
                  «{item.quote}»
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </Frame>
  );
}

const WAYS = [
  "Кому-то нужен зал",
  "Кому-то — бег",
  "Кому-то — волейбол после работы",
  "Кому-то — первая тренировка вместе с коллегой",
];

export function IdeaSlide() {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <img
        src="/images/threshold.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="veil-photo absolute inset-0" />
      <div className="relative flex h-full min-h-dvh flex-col justify-end px-5 pb-32 pt-20 sm:px-12 sm:pb-28 lg:px-16">
        <div className="stagger-in max-w-2xl">
          <Kicker>04 · Большая идея</Kicker>
          <h2 className="mt-4 font-display text-display font-medium tracking-display text-fg">
            Своя сторона силы
          </h2>
          <p className="mt-4 text-lg font-medium text-fg">
            У каждого сотрудника — свой способ быть активным.
          </p>
          <ul className="mt-6 space-y-2">
            {WAYS.map((line) => (
              <li key={line} className="flex gap-3 text-sm text-muted sm:text-base">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-fg sm:text-base">
            Сбер не говорит сотруднику, каким должен быть его спорт.
            Сбер помогает ему найти свой.
          </p>
        </div>
      </div>
    </section>
  );
}

const AUDIENCES = [
  {
    n: "01",
    title: "Хочу начать",
    barrier: "Я не спортсмен",
    show: "Простые форматы, новичков, первую тренировку, поддержку коллег",
    line: "Начать можно с одного занятия",
  },
  {
    n: "02",
    title: "Уже занимаюсь",
    barrier: "Не знаю, что ещё есть",
    show: "Новые секции, соревнования, инфраструктуру, спортивные сообщества",
    line: "Найди свой следующий уровень",
  },
  {
    n: "03",
    title: "Мне нужна команда",
    barrier: "Одному неинтересно",
    show: "Команды, истории коллег, совместные тренировки, турниры",
    line: "Зови своих — спорт объединяет",
  },
];

export function AudienceSlide() {
  return (
    <Frame>
      <div className="stagger-in">
        <Kicker>05 · Аудитории</Kicker>
        <h2 className="mt-3 font-display text-display font-medium tracking-display text-fg">
          Три аудитории — три сообщения
        </h2>
        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <Panel key={a.n} className="flex flex-col">
              <p className="font-display text-kicker tabular-nums text-accent">{a.n}</p>
              <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-fg">
                {a.title}
              </h3>
              <p className="mt-3 text-xs uppercase tracking-wide text-subtle">Барьер</p>
              <p className="mt-1 text-sm text-muted">«{a.barrier}»</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-subtle">
                Что показываем
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{a.show}</p>
              <p className="mt-6 border-t border-line pt-4 font-display text-sm font-medium text-accent-soft">
                {a.line}
              </p>
            </Panel>
          ))}
        </div>
      </div>
    </Frame>
  );
}

const RUBRICS = [
  {
    n: "01",
    title: "Попробуй впервые",
    text: "Истории сотрудников, которые впервые пришли на тренировку. «Я никогда не играл в волейбол. Пришёл с коллегой — теперь хожу каждую неделю».",
  },
  {
    n: "02",
    title: "Спорт этой недели",
    text: "Одна неделя — один фокус. Волейбол · Среда 18:30 · Новички welcome → Записаться.",
  },
  {
    n: "03",
    title: "Свои в деле",
    text: "Люди вместо абстрактных достижений. Сотрудник + история + вид спорта + зачем ему это.",
  },
  {
    n: "04",
    title: "Карта возможностей",
    text: "Где? Когда? Как записаться? Для кого? Сколько мест? Единый визуальный шаблон.",
  },
  {
    n: "05",
    title: "Команда недели",
    text: "Секции и сообщества. «Ищем игроков в волейбольную команду. Уровень — любой».",
  },
  {
    n: "06",
    title: "Спорт за 30 минут",
    text: "Для тех, у кого «нет времени»: короткие тренировки, зарядки, форматы до и после работы.",
  },
];

export function ContentSlide() {
  return (
    <Frame>
      <div className="stagger-in">
        <Kicker>06 · Контент</Kicker>
        <h2 className="mt-3 font-display text-display font-medium tracking-display text-fg">
          Шесть рубрик
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted">
          Закрывают путь от интереса до регулярного участия.
        </p>
        <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {RUBRICS.map((r) => (
            <div key={r.n} className="flex gap-4 border-t border-line pt-4">
              <span className="font-display text-sm tabular-nums text-accent">{r.n}</span>
              <div>
                <h3 className="font-display text-base font-medium tracking-tight text-fg">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

const CHANNELS = [
  { ch: "Внутренний портал / лента", fmt: "Посты, истории, подборки", freq: "2–3 раза в неделю" },
  { ch: "Email", fmt: "«Спорт этой недели»", freq: "1 раз в неделю" },
  { ch: "Календарь", fmt: "Тренировки и соревнования", freq: "Постоянно" },
  { ch: "Push / корп. приложение", fmt: "Напоминание", freq: "За 24 ч / 2 ч" },
  { ch: "Плакаты / экраны", fmt: "Афиша и QR", freq: "Раз в 2 недели" },
  { ch: "Чаты секций", fmt: "Оперативные сообщения", freq: "По необходимости" },
  { ch: "Руководители / капитаны", fmt: "Личное приглашение", freq: "2 раза в месяц" },
];

export function ChannelsSlide() {
  return (
    <Frame>
      <div className="stagger-in">
        <Kicker>07 · Каналы</Kicker>
        <h2 className="mt-3 font-display text-display font-medium tracking-display text-fg">
          Каналы и ритм
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted">
          Не больше каналов — яснее ритм. Каждый канал знает свою роль.
        </p>
        <div className="mt-8 overflow-hidden rounded-xl hairline">
          <div
            data-channels-head="1"
            className="max-sm:hidden sm:grid sm:grid-cols-12 border-b border-line bg-surface-2 px-5 py-3 text-kicker uppercase tracking-widest text-subtle"
          >
            <span className="col-span-5">Канал</span>
            <span className="col-span-4">Формат</span>
            <span className="col-span-3 text-right">Частота</span>
          </div>
          {CHANNELS.map((row) => (
            <div
              key={row.ch}
              className="grid gap-1 border-b border-line px-5 py-4 last:border-0 sm:grid-cols-12 sm:items-baseline sm:gap-4"
            >
              <p className="font-medium text-fg sm:col-span-5">{row.ch}</p>
              <p className="text-sm text-muted sm:col-span-4">{row.fmt}</p>
              <p className="text-sm text-accent-soft sm:col-span-3 sm:text-right">
                {row.freq}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function RuleSlide() {
  return (
    <Frame>
      <div className="stagger-in max-w-3xl">
        <Kicker>08 · Правило</Kicker>
        <h2 className="mt-3 font-display text-display font-medium tracking-display text-fg">
          Одна коммуникация — одно действие
        </h2>
        <div className="mt-10 space-y-4">
          <div className="rounded-xl border border-line px-5 py-6 sm:px-8">
            <p className="font-display text-kicker uppercase tracking-widest text-subtle">
              Не так
            </p>
            <p className="mt-3 text-lg leading-snug text-subtle line-through decoration-subtle/50 sm:text-xl">
              «В Сбере существует множество возможностей для занятий спортом…»
            </p>
          </div>
          <div className="rounded-xl bg-accent-dim px-5 py-6 sm:px-8">
            <p className="font-display text-kicker uppercase tracking-widest text-accent-soft">
              А так
            </p>
            <p className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-fg sm:text-3xl">
              Волейбол в среду · 18:30
            </p>
            <p className="mt-2 text-base text-muted">
              Офис · Новичкам · Записаться
            </p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

const MECHANICS = [
  {
    n: "01",
    title: "Первый раз — вместе",
    text: "Можно привести коллегу на первое занятие. Снижает барьер входа.",
  },
  {
    n: "02",
    title: "Спорт в календарь",
    text: "Тренировка автоматически добавляется в рабочий календарь. Спорт становится такой же частью недели, как встреча.",
  },
  {
    n: "03",
    title: "4 тренировки в месяц",
    text: "Простой челлендж: 4 занятия → digital-бейдж / мерч / доступ к специальной активности.",
  },
  {
    n: "04",
    title: "Приведи коллегу",
    text: "Механика органического роста: пришёл сам → привёл коллегу → сформировал команду.",
  },
  {
    n: "05",
    title: "Спорт по уровню",
    text: "Новичок → Любитель → Регулярный → Соревновательный. Спорт перестаёт быть закрытым клубом.",
  },
];

export function MechanicsSlide() {
  return (
    <Frame>
      <div className="stagger-in">
        <Kicker>09 · Механики</Kicker>
        <h2 className="mt-3 font-display text-display font-medium tracking-display text-fg">
          Стратегия — это не только контент
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {MECHANICS.map((m) => (
            <div key={m.n} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
              <p className="font-display text-sm tabular-nums text-accent sm:col-span-1">
                {m.n}
              </p>
              <h3 className="font-display text-lg font-medium tracking-tight text-fg sm:col-span-4">
                {m.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted sm:col-span-7">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

const WEEK = [
  { id: "mon", day: "Пн", label: "Йога", sport: "Йога" },
  { id: "tue", day: "Вт", label: "Бег", sport: "Бег" },
  { id: "wed", day: "Ср", label: "Волейбол", sport: "Волейбол", featured: true },
  { id: "thu", day: "Чт", label: "Плавание", sport: "Плавание" },
  { id: "fri", day: "Пт", label: "Функц.", sport: "Функциональная тренировка" },
  { id: "sat", day: "Сб", label: "Семья", sport: "Семейная активность" },
  { id: "sun", day: "Вс", label: "Клуб", sport: "Прогулка / клуб" },
];

export function WaveSlide() {
  const [active, setActive] = useState("wed");
  const current = WEEK.find((d) => d.id === active) ?? WEEK[2];

  return (
    <Frame>
      <div className="stagger-in">
        <Kicker>10 · Волна</Kicker>
        <h2 className="mt-3 font-display text-display font-medium tracking-display text-fg">
          7 дней — 7 способов двигаться
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted">
          Каждый день: 1 человек + 1 вид активности + 1 конкретное действие.
        </p>
        <div className="mt-8 grid grid-cols-7 gap-1 sm:gap-2">
          {WEEK.map((d) => {
            const on = d.id === active;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setActive(d.id)}
                className={cn(
                  "min-h-11 rounded-lg px-1 py-2 text-left transition-[background-color,color] duration-150 sm:px-3 sm:py-3",
                  on ? "bg-accent text-ink" : "bg-surface text-fg hover:bg-surface-2",
                )}
              >
                <span className={cn("block font-display text-kicker uppercase tracking-widest", on ? "text-ink/70" : "text-subtle")}>
                  {d.day}
                </span>
                <span className="mt-2 block text-xs font-medium leading-snug sm:text-sm">
                  {d.label}
                </span>
              </button>
            );
          })}
        </div>
        <Panel className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-kicker uppercase tracking-widest text-accent">
              {current.day} · {current.sport}
            </p>
            {current.featured ? (
              <p className="mt-2 text-base text-fg">
                18:30 · Подойдёт, даже если никогда не играл · Записаться
              </p>
            ) : (
              <p className="mt-2 text-base text-muted">
                Один день — один фокус. Сотрудник видит не «корпоративный спорт»,
                а конкретный способ найти свой.
              </p>
            )}
          </div>
          {current.featured ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink">
              Записаться
              <ArrowRight className="size-4" />
            </span>
          ) : null}
        </Panel>
      </div>
    </Frame>
  );
}

const METRICS = [
  {
    n: "1",
    title: "Знание",
    en: "Awareness",
    text: "Знают, где найти спортивные возможности; знают, как записаться; знают о мероприятиях",
  },
  {
    n: "2",
    title: "Первое действие",
    en: "First Sport Rate",
    text: "Доля сотрудников, впервые пришедших на спортивную активность",
  },
  {
    n: "3",
    title: "Повторное участие",
    en: "Repeat Sport Rate",
    text: "Доля новичков, которые возвращаются в течение 30 дней",
  },
  {
    n: "4",
    title: "Вовлечение",
    en: "Sport Engagement Rate",
    text: "Доля сотрудников, регулярно участвующих в спортивных активностях",
  },
  {
    n: "5",
    title: "Рекомендация",
    en: "Referral",
    text: "Количество участников, пришедших по приглашению коллеги",
  },
];

export function MetricsSlide() {
  return (
    <Frame>
      <div className="stagger-in">
        <Kicker>11 · Эффект</Kicker>
        <h2 className="mt-3 font-display text-display font-medium tracking-display text-fg">
          Пять уровней вовлечения
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted">
          Не только охваты и лайки.
        </p>
        <ol className="mt-8">
          {METRICS.map((m) => (
            <li
              key={m.n}
              className="grid grid-cols-12 items-start gap-3 border-t border-line py-4 last:border-b sm:gap-6"
            >
              <span className="col-span-1 font-display text-xl tabular-nums text-accent">
                {m.n}
              </span>
              <div className="col-span-11 sm:col-span-4">
                <p className="font-display text-base font-medium tracking-tight text-fg">
                  {m.title}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-wide text-subtle">{m.en}</p>
              </div>
              <p className="col-span-12 text-sm leading-relaxed text-muted sm:col-span-7 sm:col-start-6">
                {m.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Frame>
  );
}

export function CloseSlide() {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <img
        src="/images/together.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="veil-center absolute inset-0" />
      <div className="relative flex h-full min-h-dvh flex-col items-center justify-end px-5 pb-32 pt-20 text-center sm:px-12 sm:pb-28">
        <div className="stagger-in max-w-2xl">
          <Mark className="mx-auto size-10" />
          <p className="mt-8 font-display text-display font-medium leading-tight tracking-display text-fg">
            Сбер даёт возможности.
            <br />
            Коммуникация помогает сотруднику найти свою.
          </p>
          <p className="mt-8 font-display text-xl font-medium tracking-tight text-accent-soft sm:text-2xl">
            Свою сторону силы
          </p>
        </div>
      </div>
    </section>
  );
}

export function PostSlide() {
  return (
    <Frame>
      <div className="stagger-in grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Kicker>Приложение 01</Kicker>
          <h2 className="mt-3 font-display text-display font-medium tracking-display text-fg">
            Пост во внутреннюю ленту
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
            Одна карточка — одно действие. Человек за 5 секунд понимает: что, когда,
            для кого и что нажать.
          </p>
        </div>
        <div className="lg:col-span-7">
          <article className="mx-auto max-w-md rounded-2xl bg-surface p-5 hairline sm:p-6">
            <header className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-accent-dim">
                <Mark className="size-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-fg">Корпоративный спорт Сбера</p>
                <p className="text-xs text-subtle">Сегодня · 09:15</p>
              </div>
            </header>
            <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-fg">
              А ты уже нашёл свой спорт в Сбере?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              В эту среду — волейбол для новичков.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-fg">
              <li className="flex items-center gap-3">
                <Calendar className="size-4 text-accent" strokeWidth={1.75} />
                Среда, 18:30
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-accent" strokeWidth={1.75} />
                Спортивный зал офиса
              </li>
              <li className="flex items-center gap-3">
                <Users className="size-4 text-accent" strokeWidth={1.75} />
                Можно без опыта
              </li>
            </ul>
            <p className="mt-5 text-sm text-muted">Приходи один или зови коллегу.</p>
            <button
              type="button"
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
            >
              Записаться
              <ArrowRight className="size-4" />
            </button>
          </article>
        </div>
      </div>
    </Frame>
  );
}

export function PosterSlide() {
  return (
    <Frame className="max-w-5xl">
      <div className="stagger-in grid items-center gap-8 lg:grid-cols-2">
        <div>
          <Kicker>Приложение 02</Kicker>
          <h2 className="mt-3 font-display text-display font-medium tracking-display text-fg">
            Плакат
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
            Для экранов в офисе и лифтах. Крупный набор. Один вид спорта. QR ведёт
            сразу на запись — не на «спортивную страницу».
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-ink">
          <img
            src="/images/ball.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-80"
          />
          <div className="veil-poster absolute inset-0" />
          <div className="relative flex aspect-poster flex-col justify-between p-6 sm:p-8">
            <div>
              <Mark className="size-8 text-accent-soft" />
              <p className="mt-8 font-display text-3xl font-medium leading-none tracking-display text-fg sm:text-4xl">
                Не нужно быть
                <br />
                спортсменом,
                <br />
                чтобы начать.
              </p>
            </div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-sm font-medium uppercase tracking-wide text-accent-soft">
                  Волейбол · Среда · 18:30
                </p>
                <p className="mt-1 text-sm text-muted">Для новичков</p>
              </div>
              <div className="text-center">
                <QrMark className="size-16 sm:size-20" />
                <p className="mt-2 font-display text-kicker uppercase tracking-widest text-fg">
                  Записаться
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export const SLIDES: SlideMeta[] = [
  { id: "cover", num: "01", title: "Своя сторона силы", Component: CoverSlide },
  { id: "ecosystem", num: "02", title: "Экосистема", Component: EcosystemSlide },
  { id: "problem", num: "03", title: "Проблема", Component: ProblemSlide },
  { id: "barriers", num: "04", title: "Барьеры", Component: BarriersSlide },
  { id: "idea", num: "05", title: "Большая идея", Component: IdeaSlide },
  { id: "audience", num: "06", title: "Аудитории", Component: AudienceSlide },
  { id: "content", num: "07", title: "Контент", Component: ContentSlide },
  { id: "channels", num: "08", title: "Каналы", Component: ChannelsSlide },
  { id: "rule", num: "09", title: "Одно действие", Component: RuleSlide },
  { id: "mechanics", num: "10", title: "Механики", Component: MechanicsSlide },
  { id: "wave", num: "11", title: "Волна", Component: WaveSlide },
  { id: "metrics", num: "12", title: "Метрики", Component: MetricsSlide },
  { id: "close", num: "13", title: "Финал", Component: CloseSlide },
  { id: "post", num: "14", title: "Пост", Component: PostSlide },
  { id: "poster", num: "15", title: "Плакат", Component: PosterSlide },
];
