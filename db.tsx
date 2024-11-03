import { ReactElement } from "react"

export default interface iformula {
    title: string,
    content: string,
    detail: ReactElement,
    tags: string[]
}

export interface idata {
    formulas: iformula[]
}


export const data: idata = {
    formulas: [
        {
            title: "Average Speed",
            content: "Velocity = Distance moven / Time Taken",
            detail: (
                <>
                    This formula is used to find the Average Speed, Average speed is also known as Velocity,
                    <br />
                    <br />
                    <h2>Units</h2>
                    <br />
                    Distance can be measured in M, KM, and any distance Units
                    <br />
                    Time is measured in any temporal unit such as H, S, M
                    <br />
                    Average Speed/Velocity is measured in distanceUnit/TimeUnit, EG: KM/H, MpH
                    <br />
                    <br />
                    <br />
                    <h2>Formula Triangle - S / (VT) </h2>
                    <br />
                    V = Average Speed / Velocity
                    <br />
                    S = Distance Moved
                    <br />
                    T = Time
                    <br />
                </>),
            tags: ["Speed", "Velocity", 'Forces']
        },
        {
            title: "Acceleration",
            content: "Acceleration = Change in velocity / time taken",
            detail: (
                <>
                    This formula is used to find the Acceleration, Acceleration isn't the same as Velocity or speed, it is the Change in Velocity with respect to time,
                    <br /> For example, If you are traveling at 200MPH Constantly, there isn't any acceleration, but if you speed up and slow down, there is acceleration (speeding up) and de-acceleration (slowing down)
                    <br />
                    <br />
                    <h2>Units</h2>
                    <br />
                    Acceleration is measured typically in m/s^2
                    <br />
                    Time is measured in any temporal unit such as H, S, M
                    <br />
                    Velocity is measured in distanceUnit/TimeUnit, EG: KM/H, MpH
                    <br />
                    <br />
                    <br />
                    <h2>Formula Triangle - (V-U) / (AT) </h2>
                    <br />
                    V-U ={">"} V = Final Velocity, U = Initial Velocity, The whole is the Change in Velocity, sometimes you might see Delta {"(Δ)"} Velocity
                    <br />
                    A = Acceleration
                    <br />
                    T = Time Taken
                    <br />
                </>), tags: ["Acceleration", "Velocity", 'Forces', 'Differentiation']
        },
        {
            title: "Final Velocity",
            content: "(Final Velocity)^2=(Initial Velocity)^2 + 2(Acceleration)(distance traveled while accelerating)",
            detail: (
                <>
                    This formula is used to find the final Velocity of an entity
                    <br />
                    <br />
                    <h2>Units</h2>
                    <br />
                    Acceleration is measured typically in m/s^2
                    <br />
                    Velocity is measured in distanceUnit/TimeUnit, EG: KM/H, MpH
                    <br />
                    Distance can be measured in M, KM, and any distance Units
                    <br />
                    <br />
                    <h2>Formula - V^2 = U^2 + 2AS </h2>
                    <br />
                    V-U ={">"} V = Final Velocity, U = Initial Velocity, 
                    <br />
                    A = Acceleration
                    <br />
                    S = Distance travelled while accelerating
                    <br />
                </>),
            tags: ["Speed", "Velocity", 'Forces']
        },
        {
            title: "Weight",
            content: "Weight = Mass * Gravitational Field Strength",
            detail: (
                <>
                    This formula is used to find the Weight or mass, it can also be used to find the GFS if the other two are given, <br/> Weight and mass are 2 different measurements, Mass is litterally the amount of 'stuff' in an object, whereas weight is the Mass, with Gravity, <br/> For example, a ball has a Mass of 10KG, IE: 10KG amount of stuff is in the ball, now on planet B55, the GFS is 10N/KG, so the balls weight on B55 is 100N, now if we take the same ball to plannet F54, on F54 the GFS is only 4N/KG, the ball will only be 40N
                    <br />
                    <br />
                    <h2>Units</h2>
                    <br />
                    Mass is measured typically in KG
                    <br />
                    Weight is measured in Newtons
                    <br />
                    Gravitational Field Strength is measured in N/kg
                    <br />
                    <br />
                    <h2>Formula - W = MG </h2>
                    <br />
                    W = Weight
                    <br />
                    M = Mass
                    <br />
                    G = Gravitational Field Strength
                    <br />
                    This Formula can be Rearranged using Algebra, W=MG, G=W/M, M=W/G
                    <br />
                </>),
            tags: ["Weight", "Gravitational Field Strength", 'Mass']
        },
        {
            title: "Force",
            content: "Force = mass * acceleration",
            detail: (
                <>
                    This formula is used to find the Force/Acceleration of an object, or even the Mass if the Examiner is a bit......odd....
                    <br />
                    <br />
                    <h2>Units</h2>
                    <br />
                    Acceleration is measured typically in m/s^2
                    <br />
                    Mass is measured typically in KG
                    <br />
                    Force is measured in Newtons (N)
                    <br />
                    <br />
                    <h2>Formula - F = MA</h2>
                    <br />
                    F = Force
                    <br />
                    A = Acceleration
                    <br />
                    M = Mass
                    <br />
                </>),
            tags: ["Force", "acceleration", 'Mass']
        },
        {
            title: "Momentum",
            content: "Momentum = mass * Velocity",
            detail: (
                <>
                    This formula is used to find the Momentum/velocity of an object, or even the Mass if the Examiner is a bit......odd....
                    <br />
                    <br />
                    <h2>Units</h2>
                    <br />
                    Velocity is measured in distanceUnit/TimeUnit, EG: KM/H, MpH, M/S
                    <br />
                    Mass is measured typically in KG
                    <br />
                    Momentum is measured in KG M/S
                    <br />
                    <br />
                    <h2>Formula - P = MV</h2>
                    <br />
                    V = Velocity
                    <br />
                    P = Momentum
                    <br />
                    M = Mass
                    <br />
                    the formula can be Rearranged with algebra, P = MV, M = PV, V = PM
                    <br />
                </>),
            tags: ["Momentum", "Velocity", 'Mass']
        },
        {
            title: "Momentum Conservation",
            content: "Momentum before = Momentum after",
            detail: (
                <>
                    this is self-explanitory, momentum is conserved when no external forces interfere, <b>Momentum before = Momentum after</b>
                    <h2>EG</h2>
                    <br />
                    A Gun fires a bullet, the bullet flies in the "Right" direction, the velocity of the bullet is 150m/s, the mass of the bullet is 0.01KG and the mass of the gun is 1KG, What speed does the gun move backwards?
                    <br />
                    1{")"} Step 1, Chose a direction to be positive, for now we'll use Right, the same direction as the bullet
                    <br />
                    2{")"} Step 2, Total momentum before = 0
                    <br />
                    3{")"} Step 3, Total momentum after = Bullets momentum + Guns momentum, {"(0.01 * 150) + (1 * V)"} = {"1.5 + V"}, <i>BTW Here V is the speed that the gun moves backwards</i>
                    <br />
                    4{")"} Step 4, Total momentum before = Total momentum after, {"1.5 + V"} = 0, V = -1.5, The gun moves backwards (to the left) at 1.5 M/S
        
                </>),
            tags: ["Momentum"]
        },
        {
            title: "Momentum Force",
            content: "Force = Change in momentum / time",
            detail: (
                <>
                    This formula is used to find the resultant force after a change in moment, EG: After a car crash, the force on the human, or a Gun's Recoil.
                    <br />
                    <br />
                    <h2>Units</h2>
                    <br />
                    Force is measured in Newtons
                    <br />
                    Time is measured in any temporal unit
                    <br />
                    Momentum is measured in KG M/S
                    <br />
                    <br />
                    <h2>Formula - Force = Change in momentum/Time</h2>
                    <br />
                    F = Force
                    <br />
                    Change in momentum = Final Momentum - Initial Momentum, sometimes you might see Delta Momentum {"(Δ)"}, Or MV - MU, where MV = Final momentum and MU = initial momentum
                    <br />
                    T = Time
                    <br />
                    the formula can be Rearranged with algebra, F={"(Δ)"}M/T, {"(Δ)"}M=FT, T={"(Δ)"}M/F
                    <br />
                    <h2>EG</h2>
                    <br />
                    Find the force exerted on the gun if it is accelerated for 0.1 seconds
                    <br />
                   The gun moves backwards (to the left) at 1.5 M/S
                   <br />
                    {"1)"} Momentum of gun before firing = MU = 1 * 0 = 0
                    <br />
                    {"2)"} Momentum of gun after firing = MV = 1 * -1.5 = -1.5
                   <br />
                    {"3)"} (MV-MU)/T = (-1.5 - 0) / 0.1 = -15N, Force exerted on gun = -15N, (By newtons 3rd law, the force on the bullet should also be 15N in the opposite direction)
                           
                </>),
            tags: ["Momentum", 'force']
        },
        {
            title: "Moment",
            detail: (
                <>
                 This formula is used to find the turning effect (moment) created from the force applied, Imagine a spanner
                    <br />
                    <br />
                    <h2>Units</h2>
                    <br />
                    Force is measured in N
                    <br />
                    Distance is measured m (metre)
                    <br />
                    Moment is measured in NM
                    <br />
                    <br />
                    <h2>Formula - M = FPd</h2>
                    <br />
                    F = Force 
                    <br />
                    M = Moment (Turning effect)
                    <br />
                    Pd = Perpendicular Distance between line of action and pivot
                    <br />
                    the formula can be Rearranged with algebra, Pd = M/F, M = FPd, F = MPd
                    <br />
                    <br />
                    <img src="/Figure-03-4.jpg" alt="Spanner Diagram" />
                    {/* <img src="https://alevelphysics.co.uk/wp-content/uploads/2018/05/Figure-03-4.jpg" alt="Spanner Diagram" /> */}
                </>),
            content: "Force * Perpendicular distance between line of action and pivot",
            tags: ["Moment", 'force']
        },
        {
            title: "Voltage",
            content: "Voltage = Current * Resistance",
            detail: (
                <>
                 This formula is used to find the Voltage/Current/Resistance
                    <br />
                    <br />
                    <h2>Units</h2>
                    <br />
                    Voltage = V, Volts
                    <br />
                    Current = A, Amps
                    <br />
                    Resistance = Ω, Ohms (Greek symbol of Omega)
                    <br />
                    <br />
                    <h2>Formula - V = IR</h2>
                    <br />
                    V = Voltage, this is the pressure from an electrical circuit's power source (battery) that pushes charged electrons (current) through the Circuit
                    <br />
                    I = Current, An electric current is a flow of charged particles, such as electrons or ions, moving through an electrical conductor or space.
                    <br />
                    R = Resistance, Resistance to electricity–that is, electrical resistance–is a force that counteracts the flow of current.
                    <br />
                    the formula can be Rearranged with algebra, V=IR, I=V/R, R = V/I
                    <br />
                    <br />
                </>),
            tags: ["voltage", 'current', 'resistance']
        },
        {
            title: "Charge",
            content: "Charge = current * Time",
            detail: (
                <>
                    This formula is used to find the Charge/current/Time
                    <br />
                    <br />
                    <h2>Units</h2>
                    <br />
                    Charge = C, Coulombs, A coulomb of charge is just a very large group of electrons. An electric current is a flow of charged particles.
                    <br />
                    Current = A, Amps
                    <br />
                    Time = Temporal Unit
                    <br />
                    <br />
                    <h2>Formula - Q = I * T</h2>
                    <br />
                    Q= Charge, 
                    <br />
                    I = Current, An electric current is a flow of charged particles, such as electrons or ions, moving through an electrical conductor or space.
                    <br />
                    R = Resistance, Resistance to electricity–that is, electrical resistance–is a force that counteracts the flow of current.
                    <br />
                    the formula can be Rearranged with algebra, Q=IT, I = Q/T, T = Q/I
                    <br />
                    <br />
                </>),
            tags: ["charge", 'current', 'time']

        },
        {
            title: "Energy Transfered",
            content: "Energy Transfered = charge * Voltage",
            detail: (
                <>
                  This formula is used to find the Charge/voltage/energy transfered
                    <br />
                    When an electrical charge goes through a change in voltage, then energy is transfered
                    <br />
                    <br />
                    <h2>Units</h2>
                    <br />
                    Charge = C, Coulombs, A coulomb of charge is just a very large group of electrons. An electric current is a flow of charged particles.
                    <br />
                    V = Voltage, this is the pressure from an electrical circuit's power source (battery) that pushes charged electrons (current) through the Circuit
                    <br />
                    Current = A, Amps
                    <br />
                    Voltage = V, Volts
                    <br />
                    Time = Temporal Unit
                    <br />
                    Energy transfered = J, Joules
                    <br />
                    <h2>Formula - E = Q * V</h2>

                    <br/>
                    Q= Charge, 
                    <br />
                    I = Current, An electric current is a flow of charged particles, such as electrons or ions, moving through an electrical conductor or space.
                    <br />
                    R = Resistance, Resistance to electricity–that is, electrical resistance–is a force that counteracts the flow of current.
                    <br />
                    the formula can be Rearranged with algebra, Q=IT, I = Q/T, T = Q/I
                    <br />
                    <br />
                </>),
            tags: ["charge", 'Energy Transfered', 'Voltage']
        },
        // {
        //     title: "Electrical power",
        //     content: "electrical power = current * Voltage",
        //     detail: (
        //         <>
        //         </>),
        //     tags: ["current", 'electrical power', 'Voltage']
        // },
        // {
        //     title: "Wavelengths",
        //     content: "Distance from one peak to the other",
        //     detail: (
        //         <>
        //         </>),
        //     tags: ["Wavelengths"]
        // },
        // {
        //     title: "Frequency",
        //     content: "how many complete waves pass a point per seccond",
        //     detail: (
        //         <>
        //         </>),
        //     tags: ["Frequency"]
        // },
        // {
        //     title: "amptitude",
        //     detail: (
        //         <>
        //         </>),
        //     content: "height, crest to rest",
        //     tags: ["amptitude", 'crest', 'rest']
        // },
        // {
        //     title: "period",
        //     content: "period = 1/ frequency",
        //     detail: (
        //         <>
        //         </>),
        //     tags: ["amptitude", 'crest', 'rest']
        // },
    ]
}


