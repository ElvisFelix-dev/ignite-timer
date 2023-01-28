import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { CycleContext } from '../../../../context/CycleContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        title="Digite aqui o nome do seu projeto"
        id="task"
        list="task-suggestion"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestion">
        <option value="Trabalhar com frontend" />
        <option value="Refatorar components" />
        <option value="Deploy" />
        <option value="Estudar CSS3" />
        <option value="Atualizar o responsivo" />
        <option value="Desenvolver a versão mobile" />
        <option value="Adicionar features" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        title="Escolha aqui o tempo para seu projeto"
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
